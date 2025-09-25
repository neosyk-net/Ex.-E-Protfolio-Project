// template_s3chdi9
// service_006c53z
// 5FCkLIgTwdMXbV0pi
// <script type="text/javascript"
        
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_006c53z',
            'template_6eys3pm',
            event.target,
            '5FCkLIgTwdMXbV0pi'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at runerdy@gmail.com"
            );
        })
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }

