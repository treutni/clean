clean:
	find . -name "*.pyc" -exec rm -rf {} \;

run: clean
	python3 manage.py runserver 0.0.0.0:8000
