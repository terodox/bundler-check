type InfoCardProps = {
    title: string,
    description: string
}

const InfoCard = ({ title, description }: InfoCardProps) => {
    return (
        <div style={{
            padding: '10px',
            borderRadius: '8px',
            width: '30%',
            backgroundColor: 'lightgray'
        }}>
            <div style={{ fontWeight: '700', fontSize: '20pt', paddingBottom: '20px' }}>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}

export default InfoCard;