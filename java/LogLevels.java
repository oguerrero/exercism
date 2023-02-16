public class LogLevels {

  public static String message(String logLine) {
    int trimIdx = logLine.indexOf(':');
    return logLine.substring(trimIdx + 1, logLine.length()).trim();
  }

  public static String logLevel(String logLine) {
    int trimIdx = logLine.indexOf(':');
    return logLine.substring(1, trimIdx - 1).toLowerCase();
  }

  public static String reformat(String logLine) {
    return message(logLine) + "("+ logLevel(logLine) +")";
  }
}
