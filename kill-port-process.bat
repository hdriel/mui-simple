@ECHO OFF
SET /p portChoice= "Please Select process's port to kill : " 
for /f "tokens=5" %%a in ('netstat -aon ^| FIND ":%portChoice%" ^| FIND "LISTENING"') do TASKKILL /f /pid %%a
ECHO "Finished!"
ECHO "Press any key to exit..."
PAUSE >NUL