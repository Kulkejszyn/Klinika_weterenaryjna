using System;
using System.Collections.Generic;
using System.Linq;

namespace Utils
{
	public class RandomGenerator
	{
		private readonly Random _random;

		public RandomGenerator()
		{
			_random = new Random();
		}

		public string RandomString(int length)
		{
			const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			return new string(Enumerable.Repeat(chars, length)
				.Select(s => s[_random.Next(s.Length)]).ToArray());
		}

		public int GetRandomInt(int min, int max)
		{
			return _random.Next(min, max);
		}

		public IEnumerable<T> TakeRandomElements<T>(IEnumerable<T> collection, int count)
		{
			return collection
				.OrderBy(i => _random.Next()
				).Take(count);
		}
	}
}
