const If = (props) => {
    
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    // console.log(elseChild)

    if (props.teste) {
        return ifChildren
    } else if(elseChild) {
        return elseChild
    }
}

export const Else = (props) => {
    return props.children
}

export default If