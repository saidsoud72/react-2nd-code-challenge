import React from "react";

function YourBotArmy({newBots}) {
  const botTypeClasses = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star",
  };

  const bots = newBots.filter(item => {
    if(item.status === "selected") {
      return item
    }
  }).map( item => {
    return (
      <div className="ui column">
      <div
        className="ui card"
        key={item.id}
        onClick={() => {
          fetch(`http://localhost:8002/bots/${item.id}`, {
            method:'PATCH',
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              status: "deselected"
            })
          })
        }}
      >
        <div className="image">
          <img alt="oh no!" src={item.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {item.name}
            <i className={botTypeClasses[item.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{item.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {item.health}
          </span>

          <span>
            <i className="icon lightning" />
            {item.damage}
          </span>
          <span>
            <i className="icon shield" />
            {item.armor}
          </span>
        </div>
      </div>
    </div>
    )
  })
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
