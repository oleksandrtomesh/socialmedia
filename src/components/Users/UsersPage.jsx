import c from './UsersPage.module.css';

const UsersPage = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, imgUrl: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
                followed: true, fullName: "Sasha T.", status: "Life is good", location: { country: "Belarus", city: "Minsk" }
            },
            {
                id: 2, imgUrl: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
                followed: false, fullName: "Pietia T.", status: "Life is good", location: { country: "Kyiv", city: "Ukraine" }
            },
            {
                id: 3, imgUrl: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
                followed: true, fullName: "Vova T.", status: "Life is good", location: { country: "Poland", city: "Warsaw" }
            },
        ])
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <div>
                        <div>
                            <img className={c.profileImg} src={u.imgUrl} />
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>

                </div>
            )
            }
        </div>
        
    );
}

export default UsersPage