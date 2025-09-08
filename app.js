      document.addEventListener('DOMContentLoaded', () => {
           
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            const copyBtn = document.getElementById('copy-btn');
            const emailAddress = document.getElementById('email-address');
            const messageBox = document.getElementById('message-box');

            copyBtn.addEventListener('click', () => {
                const textToCopy = emailAddress.innerText;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    messageBox.classList.remove('hidden');
                    setTimeout(() => {
                        messageBox.classList.add('hidden');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    
                    const tempTextarea = document.createElement('textarea');
                    tempTextarea.value = textToCopy;
                    document.body.appendChild(tempTextarea);
                    tempTextarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempTextarea);

                    messageBox.classList.remove('hidden');
                    setTimeout(() => {
                        messageBox.classList.add('hidden');
                    }, 2000);
                });
            });
        });