import React from "react";
import BotCard from "./BotCard"



function BotCollection({bot}) {
const renderBots = bot.map(item => {
  return < BotCard key={item.id} bot={item} />
})
  return (
    <div className="ui four column grid">
      <div className="row">
        {renderBots}
      </div>
    </div>
  );
}

export default BotCollection;
