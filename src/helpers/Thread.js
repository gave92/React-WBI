class Node {
    constructor(data = {}, parent = null) {
        this.data = data;
        this.parent = parent;
        this.children = [];
    }

    addNode(node) {
        this.children = [node, ...this.children];
    }
}

function findNodeWithID(root, id) {
    for (let i = 0; i < root.children.length; i++) {
        let node = root.children[i];
        if (node.data && node.data.id == id) {
            return node;
        }
        else {
            let find = findNodeWithID(node, id);
            if (find) return find;
        }
    }
}

function getThreadedCommentsTree(comments) {
    let root = new Node();
    comments.slice(0).reverse().forEach(comment => {
        if (!comment.parent) {
            root.addNode(new Node(comment, null));
        }
        else {
            let parent = findNodeWithID(root, comment.parent);
            if (parent) {
                let node = new Node(comment, parent);
                parent.addNode(node);
            }
        }
    });
    return root;
}

function treeToList(root, depth) {
    let list = [];
    for (let i = 0; i < root.children.length; i++) {
        let node = root.children[i];
        node.data.thread_depth = depth;
        list = [...list, node.data, ...treeToList(node, depth + 1)];
    }
    return list;
}

export default function getThreadedComments(comments) {
    let root = getThreadedCommentsTree(comments);
    return treeToList(root, 0);
}
