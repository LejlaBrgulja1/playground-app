const categories = [
    { value: 'any', description: 'Any Lookup' },
    { value: '9', description: 'General Knowledge' },
    { value: '10', description: 'Entertainment: Books' },
    { value: '11', description: 'Entertainment: Film' },
    { value: '12', description: 'Entertainment: Music' },
    { value: '13', description: 'Entertainment: Musicals and Theaters' },
    { value: '14', description: 'Entertainment: Television' },
    { value: '15', description: 'Entertainment: Video Games' },
    { value: '16', description: 'Entertainment: Board Games' },
    { value: '17', description: 'Science & Nature' },
    { value: '18', description: 'Science: Computers' },
    { value: '19', description: 'Science: Mathematics' },
    { value: '20', description: 'Mythology' },
    { value: '21', description: 'Sports' },
    { value: '22', description: 'Geography' },
    { value: '23', description: 'History' },
    { value: '24', description: 'Politics' },
    { value: '25', description: 'Art' },
    { value: '26', description: 'Celebrities' },
    { value: '27', description: 'Animals' },
    { value: '28', description: 'Vehicles' },
    { value: '29', description: 'Entertainment: Comics' },
    { value: '30', description: 'Science: Gadgets' },
    { value: '31', description: 'Entertainment: Japanese Anime & Manga' },
    { value: '32', description: 'Entertainment: Cartoon & Animations' },
  ];

  const difficulties= [
    { value: 'any', description: 'Any Difficulty' },
    { value: 'easy', description: 'Easy' },
    { value: 'medium', description: 'Medium' },
    { value: 'hard', description: 'Hard' },
  ];

  const types = [
    { value: 'any', description: 'Any Type' },
    { value: 'multiple', description: 'Multiple Choice' },
    { value: 'boolean', description: 'True / False' },
  ];

  const encodings = [
    { value: 'default', description: 'Default Encoding' },
    { value: 'urlLegacy', description: 'Legacy URL Encoding' },
    { value: 'url3986', description: 'URL Encoding (RFC 3986)' },
    { value: 'base64', description: 'Base64 Encoding' },
  ];

module.exports = {
    encodings: encodings,
    categories: categories,
    types: types,
    difficulties: difficulties
}