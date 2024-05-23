import { useGames } from "../Context/GameContext"
import GameStore from "./Game-store"

function EditorPicks() {
    const games = useGames()
    const { forUser, isLoading } = games

    // Filter for editor picks
    const editorPicks = forUser?.filter(data => data.EditorPick);

    // Take the first four editor picks
    const firstFourEditorPicks = editorPicks?.slice(0, 4);

    return (
        <div className="Store-games-rec">
            {firstFourEditorPicks?.map((data) => (
                <GameStore key={data.id} data={data} />
            ))}
        </div>
    )
}

export default EditorPicks;
