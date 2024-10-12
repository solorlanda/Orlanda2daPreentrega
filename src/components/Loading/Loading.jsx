import { PacmanLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <PacmanLoader
                margin={4}
                size={50}
                speedMultiplier={2}
            />
        </div>
    )
}
export default Loading