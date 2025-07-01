import os
import sys

def main():
    print("🟢 Entering main()")
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
    print("🟢 DJANGO_SETTINGS_MODULE set")
    try:
        from django.core.management import execute_from_command_line
        print("🟢 Django imported successfully") 
    except ImportError as exc:
        raise ImportError(
            "🔴 Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    print("🟢 execute_from_command_line called")
if __name__ == '__main__':
    print("🟢 Starting main()") 
    main()

    