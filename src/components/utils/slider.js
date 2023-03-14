
export const swipeLeft = (rightRetreat, setRightRetreat) => {
    const images = document.querySelectorAll('.slider-img');
    const innerBlock = document.querySelector('.slider-inner-block');
    const outherBlock = document.querySelector('.slider-outher-block');
    let outherBlockWidth = +(window.getComputedStyle(outherBlock).width.match(/\d/g).join(''));
    const overallWidth = (outherBlockWidth + 10) * (images.length - 1);

    if(rightRetreat < (outherBlockWidth + 10)) {
        setRightRetreat(overallWidth);
        innerBlock.style.right = rightRetreat + 'px';
    } else {
        setRightRetreat(rightRetreat - outherBlockWidth - 10);
        innerBlock.style.right = rightRetreat + 'px';
    }
}

export const swipeRight = (rightRetreat, setRightRetreat) => {
    const images = document.querySelectorAll('.slider-img');
    const innerBlock = document.querySelector('.slider-inner-block');
    const outherBlock = document.querySelector('.slider-outher-block');
    let outherBlockWidth = +(window.getComputedStyle(outherBlock).width.match(/\d/g).join(''));
    const overallWidth = (outherBlockWidth + 10) * (images.length - 1);

    if(rightRetreat >= (overallWidth - outherBlockWidth + 10)) {
        setRightRetreat(0);
        innerBlock.style.right = rightRetreat + 'px';
    } else {
        setRightRetreat(rightRetreat + outherBlockWidth + 10);
        innerBlock.style.right = rightRetreat + 'px';
    }
}