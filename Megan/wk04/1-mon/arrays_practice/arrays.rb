require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

# Remove Sunday from the last postion and move it to the first position. Use array methods.

last_day = days_of_the_week.pop()
week_at_sun = days_of_the_week.unshift(last_day)
# puts week_at_sun


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
# Your choice...

weekdays = days_of_the_week.slice(0, 5)
weekend = days_of_the_week.slice(5, 6)

# puts weekdays
# puts 'break'
# puts weekend

new_week = []
new_week.push(weekdays).push(weekend)

# # puts new_week

new_week.pop()

# puts ("trimmed #{new_week}")

# # 5. Sort the remaining days alphabetically
sort_az = new_week[0].sort()
puts sort_az