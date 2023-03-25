let shadow = document.querySelectorAll('.shadow')
let shadow_next = document.querySelector('.shadow_next')
let ideas_item = document.querySelectorAll('.ideas_item')
let ideas_item_img = document.querySelectorAll('.ideas_item_img')
let help = document.querySelectorAll('.help')
let help_art = document.querySelector('.help_art')
let services = document.querySelector('.services')
let anim = document.querySelectorAll('.anim')
let services_item_wrap = document.querySelectorAll('.services_item_wrap')
let feedback_img = document.querySelector('.feedback_img')
let feedback = document.querySelector('.feedback')
let order = document.querySelectorAll('.order')
let image_filter = document.querySelector('.image_filter')
let input_tg = document.querySelectorAll('.input_tg')
const tel = document.querySelector('.tel');
let tg = document.querySelectorAll('#tg')
let art = document.querySelector('.art')

const TOKEN = '6234678894:AAEjs2mhQVH72DYnB8s3yFH1_UqnOJDXNFI'
const CHAT_ID = '-1001836814367'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
// const URL_API_foto = `https://api.telegram.org/bot${TOKEN}/sendDocument`



const TEL_REGEXP = /^(\+7)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


function validatePhone(value) {
    return TEL_REGEXP.test(value);
}




if (document.documentElement.clientWidth <= 768) {
    for (const iterator of anim) {
        iterator.classList.remove('anim')
    }
    
    console.log(document.documentElement.clientWidth);
    
}
 


for (const iterator of tg) {
    iterator.addEventListener('submit', function (event) {
        event.preventDefault();


        if (validatePhone(this.tel.value) && this.Name.value != '') {

            let message = `<b>Сообщение с сайта innasizova.art</b>\n`
            message += `<b>Имя: ${this.Name.value}</b>\n`
            message += `<b>Телефон: ${this.tel.value}</b>\n`
            message += `<b>Телефон: ${this.comment.value}</b>\n`
            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
                .then((res) => {
                    this.Name.value = ''
                    this.tel.value = ''
                    this.comment.value = ''
                    feedback.classList.remove('active')
                    image_filter.classList.remove('active')

                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                })


        } else if (!validatePhone(tel.value)) {
            this.tel.classList.add('fillin')
            let emailTemp = this.tel.value
            this.tel.value = 'не корректный телефон'

            setTimeout(() => {
                // this.tel.classList.remove('fillin')
                this.tel.value = emailTemp
            }, 3000);
        }
        emailTemp = ''

        if (this.Name.value == '') {
            alert('имя не может быть пустым')


        }

    })
}



for (const iterator of order) {
    iterator.addEventListener('click', () => {
        feedback.classList.add('active')
        image_filter.classList.add('active')
    })
}

feedback_img.addEventListener('click', () => {
    feedback.classList.remove('active')
    image_filter.classList.remove('active')
})

image_filter.addEventListener('click', () => {
    feedback.classList.remove('active')
    image_filter.classList.remove('active')
})

// let pServices = services.querySelectorAll('p')
// let hServices = services.querySelectorAll('h1')

for (const iterator of services_item_wrap) {
    iterator.addEventListener('mouseover', () => {
        for (const item of services_item_wrap) {
            item.style.animationPlayState = 'paused'
        }
    })
}

for (const iterator of services_item_wrap) {
    iterator.addEventListener('mouseout', () => {
        for (const item of services_item_wrap) {
            item.style.animationPlayState = 'running'
        }
    })
}


// for (const iterator of help) {
//     iterator.addEventListener('mouseover', () => {
//         iterator.classList.remove('help_right')
//     })

//     iterator.addEventListener('mouseout', () => {
//         iterator.classList.add('help_right')
//     })
// }

try {


    art.addEventListener('mouseover', () => {
        art.classList.remove('right_art')
    })
    
    art.addEventListener('mouseout', () => {
        art.classList.add('right_art')
    })
    

    help_art.addEventListener('mouseover', () => {
        help_art.classList.remove('help_art_right')
    })

    help_art.addEventListener('mouseout', () => {
        help_art.classList.add('help_art_right')
    })

} catch (err) {

    // обработка ошибки

}






for (const iterator of ideas_item_img) {
    iterator.addEventListener('mouseover', (event) => {
        event.target.previousElementSibling.style.display = 'block';
        event.target.nextElementSibling.style.display = 'block';

    })

}

if (shadow_next) {
    
    shadow_next.addEventListener('mouseout', (event) => {
        event.target.parentElement.children[2].style.display = 'none';
        event.target.style.display = 'none';
    })

}




for (const iterator of shadow) {
    iterator.addEventListener('mouseout', (event) => {
        event.target.parentElement.children[2].style.display = 'none';
        event.target.style.display = 'none';

    })

}



let heading_burger = document.querySelector('.heading_burger')


let navMobile = document.querySelector('.navMobile')


heading_burger.addEventListener('click', () => {
    let classArr = ['up', 'center', 'down']
    let classArr_revers = ['up_revers', 'center_revers', 'down_revers']

    let arr = document.querySelectorAll('img')
    arr.forEach((element, index) => {

        element.classList.toggle(`${classArr[index]}`)
        element.classList.toggle(`${classArr_revers[index]}`)

    });

    navMobile.classList.toggle('downMenu')
    navMobile.classList.toggle('upMenu')
    

})


// for (const iterator of heading_burger.children) {
//     console.log(iterator.classList); 
//     // switch (iterator.classList) {
//     //     case value:

//     //         break;

//     //     default:
//     //         break;
//     // }


console.log(heading_burger.children);