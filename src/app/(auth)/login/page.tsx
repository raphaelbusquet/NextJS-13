// export default function login() {
//     return (
//         <h1>Página de login</h1>
//     )
// }
import Link from "next/link"

const login = () => {
    return (
        <div>
            <h1>Página de login</h1>
            <Link href="/">Home</Link>
        </div>
    )
} 

export default login