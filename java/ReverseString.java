class ReverseString {

  String reverse(String inputString) {
    StringBuffer buffer = new StringBuffer(inputString);
    return buffer.reverse().toString();
  }

}
