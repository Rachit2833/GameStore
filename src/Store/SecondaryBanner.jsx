function SecondaryBanner({image,data,color,align,handelClick}) {
    return (
        <section className="editorspick">
            <div style={{ backgroundSize: "cover", color: `${color}`, padding: "6rem", borderRadius: "20px", textAlign: `${align}`, margin: "4rem 0", backgroundImage: `url(${image})`, backgroundPosition: "center" }}>
                <span className="Store-main-head Store-head-b2">{data?.head}</span>
                <p className="Store-sub-head">
                    {data?.des}</p>
                <button style={{color:"black", backgroundColor:color=="red"?"transparent":color}} className="Store-banner-button" onClick={handelClick}>See Collection</button>
            </div>
        </section>
    );
}

export default SecondaryBanner;

