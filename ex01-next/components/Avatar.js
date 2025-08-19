export function Avatar() {
    const description = "Gregorio Y. Zara";
    const Avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    
    return (
        <img className="avatar" src={Avatar} alt ={description} />
    );
    
}
