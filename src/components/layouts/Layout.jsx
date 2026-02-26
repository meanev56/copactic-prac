export default function Layout(props) {
    console.log(props)
    const { children } = props


    return (
        <>
            <header>
                <h1 className="text-gradient">Copacetic</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <small>Created by</small>
                <a target="_blank" href="https://github.com/meanev56">
                    <img alt="pfp" src="https://avatars.githubusercontent.com/u/77163783?v=4" />
                    <p>@meanev56</p>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </>
    )
}