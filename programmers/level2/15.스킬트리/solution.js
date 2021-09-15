function solution(skill, skill_trees) {
    return skill_trees.map(tree => tree.split("")
        .filter(v => skill.includes(v)).join(""))
        .reduce((acc, cur) => {
            if (skill.includes(cur) && skill.indexOf(cur) === 0) acc += 1;
            return acc;
        }, 0);
}