export function ButtonExamples() {
    return (
        <section>
            <h2>Look at how many buttons we have</h2>
            <span>
                <IconButton icon={<Camera />} label="my button" />
                <IconButton icon={<ShoppingCart />} label="buy now" />
                <IconButton icon={<Camera />} label="my button" />

            </span>
        </section>
    )
}