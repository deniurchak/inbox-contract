pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox (string initialMessage) {
        message = initialMessage;
    }

    function setMessage(string newMessage) {
        message = newMessage;
    }
}
