// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import {UsingTellor} from "usingtellor/contracts/UsingTellor.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721, UsingTellor {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);
    string bullMetadata =
        "ipfs://QmZynzcHqNAPeUk6FVxyw8ofD6VXnpvYCXfyn42ADwFXfw/bull.json";
    string bearMetadata =
        "ipfs://QmZynzcHqNAPeUk6FVxyw8ofD6VXnpvYCXfyn42ADwFXfw/bear.json";
    mapping(uint256 => uint256) public ethPrice;

    constructor(
        address payable _tellorAddress
    ) ERC721("bear and bull", "BB") UsingTellor(_tellorAddress) {}
    
    function getEthSpotPrices() public view returns (uint256, uint256) {
        bytes memory _queryData = abi.encode(
            "SpotPrice",
            abi.encode("eth", "usd")
        );
        bytes32 _queryId = keccak256(_queryData);
        (
            bytes memory _valuePast,
            uint256 _timestampPastRetrieved
        ) = getDataBefore(_queryId, block.timestamp - 24 hours);
        (
            bytes memory _valuePresent,
            uint256 _timestampPresentRetrieved
        ) = getDataBefore(_queryId, block.timestamp - 20 minutes);

        if (_timestampPresentRetrieved == 0 && _timestampPastRetrieved == 0)
            return (0, 0);
        require(block.timestamp - _timestampPastRetrieved < 48 hours);
        require(block.timestamp - _timestampPresentRetrieved < 24 hours);

        return (
            abi.decode(_valuePast, (uint256)),
            abi.decode(_valuePresent, (uint256))
        );
    }

    function getEthSpotPrice() public view returns (uint256) {
        bytes memory _queryData = abi.encode(
            "SpotPrice",
            abi.encode("eth", "usd")
        );
        bytes32 _queryId = keccak256(_queryData);
        (bytes memory _value, uint256 _timestampRetrieved) = getDataBefore(
            _queryId,
            block.timestamp - 20 minutes
        );
        if (_timestampRetrieved == 0) return 0;
        require(block.timestamp - _timestampRetrieved < 24 hours);
        return abi.decode(_value, (uint256));
    }

    function safeMint(address to) public {
        _safeMint(to, _tokenIds.current());
        ethPrice[_tokenIds.current()] = getEthSpotPrice();
        _tokenIds.increment();
        emit BatchMetadataUpdate(0, type(uint256).max);
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        (uint256 yesterday, uint256 today) = getEthSpotPrices();
        if (today >  yesterday) {
            return bullMetadata;
        } else {
            return bearMetadata;
        }
    }
}
