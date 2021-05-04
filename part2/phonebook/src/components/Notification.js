const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        borderColor: 'green'
    }
    const notificationStyleRed = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        borderColor: 'red'
    }
    if (message === null) {
        return null
    }

    return (
        <div style={
            message.search('Added') >= 0
            ? notificationStyle
            : notificationStyleRed
            }>
            {message}
        </div>
    )
}

export default Notification