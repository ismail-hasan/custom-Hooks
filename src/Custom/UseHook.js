const { useEffect, useState } = require("react")

const useHook = (url) => {
    const [hooks, setHooks] = useState([])
    console.log(hooks)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setHooks(data)
            })

    }, [url])
    return [hooks]
}
export default useHook