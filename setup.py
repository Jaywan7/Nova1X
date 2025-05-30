from setuptools import setup, find_packages

setup(
    name="nova_core",
    version="1.0.0",
    packages=find_packages(),
    install_requires=["pyyaml", "jsonschema"],
    author="Jonas A.",
    description="Core architecture and logic for NOVA AI runtime system.",
)
