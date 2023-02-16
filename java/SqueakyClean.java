class SqueakyClean {
  static String clean(String identifier) {
    identifier = identifier.replaceAll("", "_").replaceAll("[\\x00-\\x1F\\x7F]", "CTRL")
        .replaceAll("[0-9]|[\\x{0001f300}-\\x{0001f64f}]|[\\u03B1-\\u03C9]", "");

    if (identifier.isEmpty())
      return "";

    StringBuilder builder = new StringBuilder();
    builder.append(identifier);
    for (int idx = 0; idx < builder.length(); idx++) {
      if (builder.charAt(idx) == '-')
        builder.deleteCharAt(idx).setCharAt(idx, Character.toUpperCase(builder.charAt(idx)));
    }
    return identifier.toString();
  }
}
