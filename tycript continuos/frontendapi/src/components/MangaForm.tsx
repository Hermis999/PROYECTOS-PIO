
function MangaForm() {
    return (
        <div>
            <form action="">
                <input type="text"
                className="border-2 border-grey-700 p-2 rounded-lg w-full"
                placeholder="Títle the manga"/>
                <textarea name="" id="" placeholder="Description the manga">
                </textarea>
                <label htmlFor="">
                    <input type="text" />
                    <span>Execute</span>
                </label>
                <button>Save</button>
            </form>
        </div>
    )
}

export default MangaForm