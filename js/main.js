const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const CardImage = './images/image.jpg';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Voluptatum eos tempore ipsa, incidunt eligendi, labore sint animi accusantium 
minus temporibus beatae accusamus natus quidem maiores laboriosam quo distinctio 
praesentium perferendis!`;

const Card = (key, theme, title) => {
    let th = theme === "light" ? "light" : "dark";
    return (
        React.createElement('div', { className: `card ${th}`, key: key }, [
            React.createElement('div', { className: 'card-header', key: `${key}_card-header1`}, [
                React.createElement('img', { src: CardImage, alt: 'Card', className: "card-img", key: `${key}_card-img` }, null)
            ]),
            React.createElement('div', { className: 'card-body', key: `${key}_card-body1` }, [
                React.createElement('h2', { className: 'card-title', key: `${key}_title` }, title),
                React.createElement('p', { className: 'card-text', key: `${key}_text` }, lorem)
            ])
        ])
    )
}

const Content = () => {
    return (
        React.createElement('div', { className: "flex", key: "content" }, [
            Card("card1", 'dark', 'Card Title 1'),
            Card("card2", 'light', 'Card Title 2'),
            Card("card3", 'dark', 'Card Title 3'),
            Card("card4", 'light', 'Card Title 4'),
            Card("card5", 'dark', 'Card Title 5'),
            Card("card6", 'light', 'Card Title 6'),
            Card("card7", 'dark', 'Card Title 7'),
        ])
    )
}

root.render(Content());