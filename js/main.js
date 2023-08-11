document.addEventListener("click", e => {
  e.preventDefault();
})

const menu = document.querySelector('#header');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
if (window.scrollY > menuHeight) {
  menu.classList.add('active');
} else {
menu.classList.remove('active');
}
});

const btn_prev1 = document.querySelector(".arrow_top i.bi-chevron-left");
const btn_next1 = document.querySelector(".arrow_top i.bi-chevron-right");
const productRow1 = document.querySelector(".section1 > div:first-of-type > ul");

let lisWidth = document.querySelector(".section1 > div:first-of-type > ul > li").clientWidth + 20;
// console.log(btn_prev1, lisWidth, productRow1)


let bnnNum = 0;
let lastNum = productRow1.childElementCount % 5;
console.log(lastNum)

btn_next1.addEventListener("click", e => {
  bnnNum++;

  productRow1.style.transform = `translateX(${-bnnNum * lisWidth}px)`

  if(bnnNum > lastNum){
    bnnNum = 0;
    productRow1.style.transform = "translateX(0px)"
  }
})
btn_prev1.addEventListener("click",e => {
  bnnNum--;
  productRow1.style.transform = `translateX(${-bnnNum * lisWidth}px)`
  console.log(bnnNum)

  if(bnnNum < 0){
    bnnNum = lastNum;
    productRow1.style.transform = `translateX(${-lastNum * lisWidth}px)`
  }
})  

const btn_prev2 = document.querySelector(".arrow_bottom i.bi-chevron-left");
const btn_next2 = document.querySelector(".arrow_bottom i.bi-chevron-right");
const productRow2 = document.querySelector(".section1 > div:nth-of-type(3) > ul");

let bnnNum2 = 0;
let lastNum2 = productRow2.childElementCount / 2;

btn_next2.addEventListener("click", e => {
  bnnNum2++;
  productRow2.style.transform = `translateX(${-bnnNum2 * lisWidth}px)`
  console.log(bnnNum2)

  if(bnnNum2 > lastNum2){
    bnnNum2 = 0;
    productRow2.style.transform = "translateX(0px)"
  }
})
btn_prev2.addEventListener("click",e => {
  bnnNum2--;
  productRow2.style.transform = `translateX(${-bnnNum2 * lisWidth}px)`

  if(bnnNum2 < 0){
    bnnNum2 = lastNum2;
    productRow2.style.transform = `translateX(${-lastNum2 * lisWidth}px)`
  }
})  