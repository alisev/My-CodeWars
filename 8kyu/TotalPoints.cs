using System.Linq;

public static class Kata {
    public static int TotalPoints(string[] games) {
      int x_points = 0;
      
      foreach (string game in games) {
        char x = game[0];
        char y = game[2];
        
        if (x > y) {
          x_points += 3;
        }
        else if (x == y) {
          x_points += 1;
        }
      }
      
      return x_points;
    }

    // found solution with lambda
    public static int TotalPoints_2 (string[] games) {
        return games.Sum(s => s[0] < s[2] ? 0 : s[0] == s[2] ? 1 : 3);
    }
}
