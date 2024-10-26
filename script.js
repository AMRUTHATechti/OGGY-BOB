let isUserMessage = true; // Toggle between user and other messages

document.getElementById('sendSound').addEventListener('click', () => {
    const petType = document.getElementById('petType').value;
    let sound;
    const emoji = petType === 'dog' ? '🐶' : '🐱';

    // Define pet sounds
    if (petType === 'dog') {
        sound = 'Woof!';
    } else if (petType === 'cat') {
        sound = 'Meow!';
    }

    // Display the sound in the chat area
    const chatArea = document.getElementById('chatArea');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUserMessage ? 'user' : 'other'); // Toggle class

    const avatar = document.createElement('img');
    avatar.src = 'path/to/user/avatar.png'; // Replace with the user avatar image path
    avatar.classList.add('avatar');

    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble');
    bubble.textContent = `The ${petType} says ${emoji} : ${sound} `;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatArea.appendChild(messageDiv);

    // Scroll to the bottom of the chat area
    chatArea.scrollTop = chatArea.scrollHeight;

    // Toggle the message sender
    isUserMessage = !isUserMessage; // Switch between user and other messages
});