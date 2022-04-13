'use strict';

//rating container
//thnakyou conatainer
//ratingbtns
//submit butoon
//score


const ratingContainer = document.querySelector('.rating-container');
const thankyouContainer = document.querySelector('.thankYou-container');
const ratingBtns = document.querySelectorAll('.btn');
const score = document.querySelector('.score');
const submitBtn = document.querySelector('#submit-btn');

ratingBtns.forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        const item = btn.currentTarget;

        ratingBtns.forEach((rating) => {
            const item2 = rating.currentTarget
            if (item !== item2) {
                rating.classList.remove('active')
            } 
        })

        item.classList.add('active')
        const ratingScore = item.textContent

        submitBtn.addEventListener('click', () => {
            score.textContent = item.textContent
            ratingContainer.classList.remove('active')
            thankyouContainer.classList.add('active')
        })
    })
})

