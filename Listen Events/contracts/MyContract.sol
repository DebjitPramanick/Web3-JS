pragma solidity >=0.4.22 <0.9.0;


contract MyContract {
    event MyEvent (
        uint indexed id,
        uint indexed date,
        string value
    );

    uint nextId;

    function emitEvent(string calldata value) external {
        emit MyEvent(nextId, block.timestamp, value);
        nextId++;
    }
}