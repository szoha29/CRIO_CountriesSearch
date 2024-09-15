const CountryCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        margin: "10px",
        border: "1px solid grey",
        borderRadius: "4px",
        width: "200px",
        height: "200px",
      }}
      className="countryCard"
    >
      <img
        src={props.src}
        alt={props.name}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h3>{props.name}</h3>
    </div>
  );
};

export default CountryCard;
