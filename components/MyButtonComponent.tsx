
type SpecialButtonProps = {
    title: string,
    description: string
}

const SpecialButton = ({ title }: SpecialButtonProps) => {
    return (
        <div>
            <div style={{ fontWeight: '700', fontSize: '20pt', paddingBottom: '20px' }}>
                {title}
            </div>
            <div>
                <button style={{ fontWeight: '700', width: '100%', backgroundColor: "rgba(90, 209, 171, 1)", borderColor: "rgba(90, 209, 171, 1)" }} onClick={() => console.log('clicked!')}>button</button>
            </div>
        </div>
    )
}

export default SpecialButton;
