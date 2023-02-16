public class Lasagna {
  public int expectedMinutesInOven() {
    return 40;
  }

  public int remainingMinutesInOven(int timeInOven) {
    return expectedMinutesInOven() - timeInOven;
  }

  public int preparationTimeInMinutes(int layers) {
    return layers * 2; // 2 is the time per layer
  }

  public int totalTimeInMinutes(int layers, int timeInOven) {
    return preparationTimeInMinutes(layers) + timeInOven;
  }
}
