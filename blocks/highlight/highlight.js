
export default function decorate(block) {
    const targetDiv = block.querySelector('div > div > div:nth-child(2)');
   
    if (targetDiv) {
    targetDiv.classList.add('eastman-highlight__content');
    }
}
