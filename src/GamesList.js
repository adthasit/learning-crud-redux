import React from 'react';

function GamesList({games}) {
    const emptyMessage = (
        <p>The are no games yet in your collection.</p>
    )

    const gamesList = (
        <p>games list</p>
    )

    return (
        <div>
            {games.length === 0
                ? emptyMessage
                : gamesList}
        </div>
    )
}

GamesList.propTypes = {
    games: React.PropTypes.array.isRequired
};

export default GamesList;