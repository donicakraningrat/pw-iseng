# pw-iseng
test push doang
npx playwright codegen https://hr.talenta.co/live-attendance --save-storage=auth.json
npx playwright codegen --load-storage=auth.json --geolocation="80.84517200,-6.21154400" https://hr.talenta.co/live-attendance
npx playwright codegen --geolocation="106.84517200,-6.21154400" 

## run test
Run Clock In:```npx playwright test -g 'Clock In'```
Run Clock In:```npx playwright test -g 'Clock Out'```

## result
To open trace use this:```npx playwright show-trace test-results/clockInOut-Clock-In-chromium/trace.zip```