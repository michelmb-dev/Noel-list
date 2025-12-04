/**
 * @name getItems
 *
 * @desc Get item in JSON file
 *
 * @param {string} file
 *
 * @return {Promise<{name: String, price: Number, image: String, source: string, checked: Boolean }[]>}
 */
async function getItems(file) {
    return await fetch(file).then(res => res.json())
}

const items = await getItems('./content.json');

// Générer la liste
const wishlistContainer = document.getElementById("wishlist");

items.forEach((item, index) => {
    const priceInEuros = (item.price / 100).toFixed(2);

    const ornamentDiv = createElementFactory("div", {
            class: "ornament",
        },
        createElementFactory("span", {class: "ornament-cap"}),
    )

    const itemDiv = createElementFactory("div", {
            class: "wishlist-item",
        },
        ornamentDiv
    );


    itemDiv.innerHTML = `
                <div class="ornament">
                    ${item.checked ? '<div class="checked-badge">✓ Acheté</div>' : ""}
                    <img src="${item.image}" alt="${item.name}" class="ornament-image">
                </div>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${priceInEuros} €</div>
                    <a href="${item.source}" target="_blank" class="item-link">Voir le produit</a>
                </div>
            `;

    wishlistContainer.appendChild(itemDiv);
});

function createSnowflake() {
    const snowflake = createElementFactory('div', {
        class: "snowflake",
        style: `left: ${Math.random() * 100}%; top: ${Math.random() * 10}%; animation-duration: ${Math.random() * 3 + 5}s; font-size: ${Math.random() * 10 + 10}px;`,
    })
    snowflake.innerHTML = "❄";

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Générer des flocons régulièrement
setInterval(createSnowflake, 300);

// Créer quelques flocons au démarrage
for (let i = 0; i < 10; i++) {
    setTimeout(createSnowflake, i);
}


/**
 * @name createElementFactory
 *
 * @desc Create Element in DOM with children
 *
 * @param {keyof HTMLElementTagNameMap} element
 * @param attrs
 * @param {HTMLElement, String} children
 *
 * @return {HTMLElement}
 */
function createElementFactory(element, attrs, ...children) {
    const el = document.createElement(element);

    for (let attrKey in attrs) {
        el.setAttribute(attrKey, attrs[attrKey]);
    }

    children.forEach((child) => {
        if (typeof child === "string") {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    });

    return el;
}

