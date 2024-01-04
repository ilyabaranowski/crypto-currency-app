export const withByBalance = (Component) => {
    return props => {
        const {balance} = props
        const byBalance = balance * 3.2;
        return <Component {...props} byBalance={byBalance} />;
    }
}
