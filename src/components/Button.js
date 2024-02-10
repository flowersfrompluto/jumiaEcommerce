function Button({ title, btnBg, classN, event }) {


    const btnStyle = {
        backgroundColor: btnBg,
        border: "1px solid white",
        borderRadius: "5px",
        textDecoration: "none",
        color: "white",
        outline: "none",
        cursor: "pointer",
        display: "inline-block",
        margin: "10px 0",
        padding: "16px 24px",
    }

    return (
        <button style={btnStyle} className={classN} onClick={event}>{title}</button>
    )
}

export default Button