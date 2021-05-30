pragma solidity >=0.4.22 <0.9.0;

contract MyContract{
    string public functionCalled;

    function sendEther() external payable {
        functionCalled = 'sendEther';
    }

    function() external payable {
        functionCalled = 'fallback';
    }
}