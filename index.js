const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const messageSearch = document.querySelector('#message-search');
const messagesList = document.querySelectorAll('.message'); // Select all messages
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const searchmsg = () => {
    const val = messageSearch.value.toLowerCase();
    messagesList.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase(); // Use querySelector instead of querySelectorAll
        if(name.indexOf(val) !== -1){
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchmsg); // Pass the function reference

// Function to remove active class for all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        // Handling notifications display
        if (item.id !== 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    });
});
const openTM = () => {
    themeModal.style.display = 'grid';
setTimeout(() => {
    themeModal.style.display = 'none';
}, 2000);
}
const closeTM = (e) => {
    if(e.target.classList.contains('customize-theme')){ // Corrected selector: 'customize-theme' instead of '.customize-theme'
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', closeTM);
theme.addEventListener('click', openTM);