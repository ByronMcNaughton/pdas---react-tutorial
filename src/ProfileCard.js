function ProfileCard({title, handle, image, description}){
    return (
    <div className="card">
        <div className="card-image">
            <figgure className="image is-1by1">
                            <img src={image} alt="pda logo"/>
            </figgure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div class="content">
                {description}
            </div>
        </div>
        
    </div>
    )
}

export default ProfileCard