const sortByDate = values => {
  return [...values].sort((a, b) => new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date));
}

export default sortByDate