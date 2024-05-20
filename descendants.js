function getAllDescendants(tree) {
    let descendants = [];

    function collectNames(node) {
        if (node.name) {
            descendants.push(node.name);
        }
        if (node.children) {
            for (let child of node.children) {
                collectNames(child);
            }
        }
    }

    collectNames(tree);
    return descendants;
}


let theJonathans = {
    children: [
        {
            name: 'Elias'
        },
        {
            name: 'Sarah',
            children: [
                {
                    name: 'Max',
                    children: [{
                        name: 'Lily'
                    }]
                },
                {
                    name: 'Zoe'
                },
                {
                    name: 'Theo'
                }
            ]
        },
        {
            name: 'Maria',
            children: [
                {
                    name: 'Daniel'
                }
            ]
        },
        {
            name: 'David'
        }
    ]
};

let descendants = getAllDescendants(theJonathans);
console.log(descendants); 